import requests
import pandas as pd
import numpy as np

# request the page as a browser
url = "https://kenpom.com"
header = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest"
}
r = requests.get(url, headers=header)

# read the table from the request
df = pd.read_html(r.text)[0]

# get rid of multiindex
df.columns = df.columns.droplevel([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])

# remove rows where Rk is Rk or empty string
df["Rk"] = df["Rk"].replace('', np.nan)
df.dropna(subset=["Rk"], inplace=True)
df.drop(df[df["Rk"] == 'Rk'].index, inplace=True)

# keep first 10 columns
df = df.iloc[:, :10]

# rename columns and drop bad data
df.columns = ['Rk', 'Team', 'Conf', 'W-L', 'AdjEM', 'AdjO', 'badAdjO', 'AdjD', 'badAdjD', 'AdjT']
df.drop(['badAdjO', 'badAdjD'], axis=1, inplace=True)

# save to csv
df.to_csv("./ncaab-backend/kenpom.csv", index=False)
