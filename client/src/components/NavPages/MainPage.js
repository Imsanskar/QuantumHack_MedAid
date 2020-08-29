import React from 'react'
import Heading from '../CommonComponents/Heading'
import Navigation from '../CommonComponents/Navigation'
import DashboardItem from '../CommonComponents/DashboardItem'

import FoodIcon from '../Assets/SVG/food_bank-24px.svg'
import StudentIcon from '../Assets/SVG/school-24px.svg'
import MedicineIcon from '../Assets/SVG/medical_services-24px.svg'
import MentalIcon from '../Assets/SVG/self_improvement-24px.svg'
import PhysicalIcon from '../Assets/SVG/pool-24px.svg'
import UtilityIcon from '../Assets/SVG/construction-24px.svg'

import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <>
            <Navigation />
            <Heading headingTitle="Dashboard" />
            <main className="container-fluid" style={dashboardStyle}>
                <div className="row justify-content-center">
                    <Link to="/food-and-water" style={{ textDecoration: "none" }}>
                        <DashboardItem className="col-md-6 my-5" itemName="Food and Water" itemImage={FoodIcon} itemInfo="Count your calories and water intake" />
                    </Link>
                    <Link to="/medicine" style={{ textDecoration: "none" }}>
                        <DashboardItem className="col-md-6 my-5" itemName="Medicines" itemImage={MedicineIcon} itemInfo="Log your medicines and set reminders" />
                    </Link>
                </div>
                <div className="row justify-content-center">
                    <Link to="/physical" style={{ textDecoration: "none" }}>
                        <DashboardItem className="col-md-6 my-5" itemName="Physical" itemImage={PhysicalIcon} itemInfo="Fitness for quarantine" />
                    </Link>
                    <Link to="/mental" style={{ textDecoration: "none" }}>
                        <DashboardItem className="col-md-6 my-5" itemName="Mental" itemImage={MentalIcon} itemInfo="Healthy mind, healthy soul" />
                    </Link>
                </div>
                <div className="row justify-content-center">
                    <Link to="/student" style={{ textDecoration: "none" }}>
                        <DashboardItem className="col-md-6 my-5" itemName="Student" itemImage={StudentIcon} itemInfo="Learn new health tips everyday" />
                    </Link>
                    <Link to="/utility" style={{ textDecoration: "none" }}>
                        <DashboardItem className="col-md-6 my-5" itemName="Utility" itemImage={UtilityIcon} itemInfo="Health utilities making your life easier" />
                    </Link>
                </div>
            </main>
        </>
    )
}

const dashboardStyle = {
    margin: "auto auto",
}

export default MainPage