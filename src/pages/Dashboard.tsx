import BarChart from '@/components/Charts/BarChart'
import PieChart from '@/components/Charts/PieChart'
import DashboardCard from '@/components/DashboardCard'
import PeopleListCard from '@/components/PeopleListCard'
import React from 'react'

const Dashboard = () => {
    return (
        <>
            <main className="p-6 sm:p-10 space-y-6">
                <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                    <div className="mr-6">
                        <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
                        <h2 className="text-gray-600 ml-0.5">Mobile UX/UI Design course</h2>
                    </div>
                </div>
                <DashboardCard />
                <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
                    <BarChart />
                    <PeopleListCard />
                    <PieChart />
                </section>
            </main>
        </>
    )
}

export default Dashboard