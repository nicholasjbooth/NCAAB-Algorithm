import pandas as pd
from kenpompy.utils import login
import kenpompy.misc as kp

browser = login("jeremyfrank333@gmail.com", "boilerup") # login
kenpom_rankings = kp.get_pomeroy_ratings(browser).iloc[:,:10] # download rankings, keep first 7 cols
kenpom_rankings.columns = ["Rk", "Team", "Conf", "W-L", "AdjEM", "AdjO", "BAD", "AdjD", "BAD", "AdjT"] # rename bad col
kenpom_rankings.drop("BAD", axis=1, inplace=True) # drop bad col
kenpom_rankings = kenpom_rankings[kenpom_rankings["Rk"] != "Rk"] # drop rows that repeat labels

kenpom_rankings["AdjEM"] = pd.to_numeric(kenpom_rankings["AdjEM"]) # cast all AdjEM values to float
kenpom_rankings.to_csv("./ncaab-backend/kenpom.csv", index=False) # save to csv
