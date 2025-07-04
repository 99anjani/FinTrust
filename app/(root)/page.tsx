import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

import React from 'react'

const Home = () => {

    const loggedIn={firstName:"John" ,lastName:"Wilion" ,email:"john.contact@gmail.com"};
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || "Guest"}
                    subtext="Access and manage your account and transactions efficiently"
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTIONs
            </div>

            <RightSideBar
              user={loggedIn}
              transactions={[]}
              banks={[{currentBalance: 145.25},{ currentBalance:552.98}]}
            />
        </section>
    )
}

export default Home
