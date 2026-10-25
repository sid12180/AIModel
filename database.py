import pandas as pd
import numpy as np
from playwright.sync_api import sync_playwright


# Container has no external network access, so read the local copy of the sheet

myDF = pd.read_csv("data.csv")

with sync_playwright() as p:
  browser = p.chromium.launch(headless=False)
  page = browser.new_page()
  page.goto(Path(__file__).with_name('index.html').as_uri())
  page.wait_for_function('window.healthProfile !== undefined')

  arr1 = page.evaluate("""() => {
    const profile = window.healthProfile;
    return [
      profile.sex,
      profile.activityLevel,
      profile.bmi,
      profile.smokingFrequency,
      profile.drinkingFrequency,
      profile.incomeUsd,
      profile.locationAvg,
      profile.familyHistory.heartDisease,
      profile.familyHistory.cancer,
      profile.familyHistory.diabetes,
      profile.familyHistory.highBloodPressure,
    ];
  }""")

  new = np.array(arr1, dtype=float)
  prediction = float(np.asarray(np.dot(W, new) + B).squeeze())
  page.evaluate("""years => window.showLifeExpectancyResult(
    years,
    'Estimate calculated by the life-expectancy model.'
  )""", prediction)
  page.wait_for_event('close')
  browser.close()

y = myDF[['Lifetime']]
x= myDF.drop(columns=['Lifetime'])
W = np.zeros(x.shape[1])
B = 0
y= np.array(y, dtype = float)
x = np.array(x, dtype = float)
print(y[0][0])
def loss(x,y,W,B):
  cost = 0
  loss = 0
  for i in range (x.shape[0]):
    cost = np.dot(W,x[i])+B
    loss += (cost-y[i])**2
  return loss

def change(x,y,W,B):
  dW = np.zeros(x.shape[1])
  dB = 0
  cost = 0
  for j in range(y.shape[0]):
    cost = np.dot(W,x[j])+B
    dW += (cost-y[j]) * x[j]
    dB += (cost-y[j])
   

  # Average gradients over all samples
  dW /= y.shape[0]
  dB /= y.shape[0]
 
  W = W - 0.0001 * dW
  B = B - 0.0001 * dB
  return (W,B)
print(f"the loss at turn 0 is {loss(x,y,W,B)}")
for i in range(20):

  for j in range(1):
    results = change(x,y,W,B)
    W = results[0]
    B = results[1]
  print(f"the loss at turn {(j+1)*(i+1)} is {loss(x,y,W,B)}")

  new = np.array(p())
test = np.dot(W,new) + B



print("Your remaining life expectancy is " + np.array2string(test[0]) + " years")
