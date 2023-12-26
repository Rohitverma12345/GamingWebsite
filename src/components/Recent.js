import React from 'react'
import "./RecentStyles.css"
import RecentData from './RecentData';
import Update1 from "../assests/update1.jpg"
import Update2 from "../assests/update2.jpg"
import Update3 from "../assests/update3.jpg"

function Recent(){
  return (
    <div className='recent'>
      <h1><span>Recent</span> Updates</h1>
      <p>Explore the Freshest News and Features!</p>
      <div className='recentcard'>
            <RecentData
                image = {Update1}
                heading = "Economy Adjustment"
                text = "Thanks to the new Coin Machine and multiple ways to obtain coins, getting your hands on the FF Coins you need to buy supplies or revive your teammates has never been easier. You can now say goodbye to the days of struggling to loot coins or watching it all get snapped up by your teammates."
            />

            <RecentData
                image={Update2}
                heading= "New Items"
                text = "The brand-new Battle Royale fighting pit will soon be graced with the addition of the Active Skill Card, Portal 50, Mini Turret, and other exciting new items. Obtain or purchase these items to enhance your combat abilities and mobility, paving the way for a smoother path to Booyah!"
            />

            <RecentData
                image={Update3}
                heading= "Guild System 2.0"
                text = "We recognize that as a vital part of a guild, the current guild level may not accurately represent the guild's activity level. That's why, in this patch, we've introduced a dynamic level system that adjusts your guild's activity level on a weekly basis, based on your guild's current activity points."
            />
      </div>
    </div>
  );
}

export default Recent;
