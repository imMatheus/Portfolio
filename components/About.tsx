import React from 'react'
import AboutCard from './AboutCard'
import { Calendar, Award, Book } from 'react-feather'
import Link from 'next/link'

const About: React.FC = () => {
	return (
		<section className="bg-gray-100 p-6 md:p-10">
			<div className="mx-auto max-w-7xl">
				<h2 className="mb-3 text-4xl font-bold">About me</h2>
				<p className="max-w-[80ch] mb-2 text-base md:mb-4">
					I am a full-stack developer with experience in web applications and apps.
					<br /> <br /> At my current job, I work as a software engineer working on implement a data driven web ui for
					an analysitcs platform{' '}
					<Link
						href="https://dema.ai"
						passHref
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-pointer font-medium transition-all hover:text-dema-dark"
					>
						@Dema
					</Link>
				</p>
				<section className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
					<AboutCard title="First line of code" subtitle="07 September 2019" date="2019-09-07" Icon={Calendar} />
					<AboutCard title="First software engineering job" subtitle="06 Maj 2021" date="2021-06-03" Icon={Award} />
					<AboutCard title="Total projects" subtitle="129" Icon={Book} />
				</section>
			</div>
		</section>
	)
}

export default About
