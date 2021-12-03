import React from "react"
import Image from "next/image"
import profile from "/public/profile.jpeg"
import sonarQube from "/public/sonarQube.png"
import cloudMigration from "/public/cloudMigration.jpg"
import automation from "/public/automation.jpg"
const Profession = () => {
    return (
        <div className="container px-4 mx-auto">

<div class="flex flex-col ...">
  <div className="container px-4 mx-auto lg:text-5xl">

  JPMorgan Chase & Co.

  </div>



  <div className="container px-4 mx-auto">
            <div className=" m-6 rounded-2xl shadow-2xl pro lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left" 
            >
                <div className="lg:px-4 lg:mt-12 ">
                    <h5 className=" text-gray-900 lg:text-2xl dark:text-white">
                        Sonar Qube 
                    </h5>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        • Created plugins for vendor product Sonar Qube and ensured proper code coverage
                        </p>
                    </div>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        • Was responsible for building new plugins which catered to complete jpmorgan developers.
                        Thes service was suppssed to be available at all times .
                         Each and every line of code in the company has to go through these mandatory code checks.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                 <a href="https://www.sonarqube.org/" target="_blank">
                    <Image
                        src={sonarQube}
                        alt="Sonar"
                        priority={true}
                        className="rounded-full"
                        width={200}
                        height={200}
                        placeholder="blur"
                    />
                    </a>
                </div>
            </div>

            <div className="  m-6 rounded-2xl shadow-2xl pro lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left" >
            <div className="lg:px-4 lg:mt-12 ">
                    <h5 className=" text-gray-900 lg:text-2xl dark:text-white">
                        Automations 
                    </h5>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        • Build a website that automates most of work by the team
                        </p>
                    </div>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        • It included Jira tickets , Code reviews 
                        and most of the informatiosn that we usually see on a day to day basis
                         </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                 <a href="https://www.sonarqube.org/" target="_blank">
                    <Image
                        src={automation}
                        alt="Automation"
                        priority={true}
                        className="rounded-full"
                        width={200}
                        height={200}
                        placeholder="blur"
                    />
                    </a>
                </div>    
      </div>

      <div className=" m-6 rounded-2xl shadow-2xl pro lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left" >
            <div className="lg:px-4 lg:mt-12 ">
                    <h5 className=" text-gray-900 lg:text-2xl dark:text-white">
                        Cloud Migration 
                    </h5>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        • JPMorgan had started to pivot towards migrating the infra to cloud.
                         As part of company wise initiative i was responsible for migrating all our microservices to cloud.
                        </p>
                    </div>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        • Migration included adding health checks and ensuring that our services are up always.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                 <a href="https://www.sonarqube.org/" target="_blank">
                    <Image
                        src={cloudMigration}
                        alt="CloudMigration"
                        priority={true}
                        className="rounded-full"
                        width={200}
                        height={200}
                        placeholder="blur"
                    />
                    </a>
                </div>    
      </div>
        </div>

</div>

        </div>
        
    )
}

export default Profession;