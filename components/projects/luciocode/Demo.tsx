import React from 'react'
import DemoCode from './DemoCode'
import DemoQuestion from './DemoQuestion'

interface DemoProps {}

const Demo: React.FC<DemoProps> = ({}) => {
	return (
		<article className="relative">
			<div className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-4 lg:-right-4">
				<div className="h-[25px] border-b border-black"></div>
			</div>
			<div className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-2 lg:-right-2">
				<div className="h-[25px] border-b border-black"></div>
			</div>
			<div className="relative flex h-full w-full flex-col overflow-hidden rounded-md border border-black bg-white">
				<div className="flex gap-1 border-b border-black p-2">
					<div className="h-2 w-2 rounded-full border border-black"></div>
					<div className="h-2 w-2 rounded-full border border-black"></div>
					<div className="h-2 w-2 rounded-full border border-black"></div>
				</div>
				<div className="flex h-full flex-col">
					<div className="grid md:grid-cols-[1fr_auto_1fr] md:grid-rows-1">
						<DemoQuestion />
						<div className="flex items-center justify-center gap-1 bg-neutral-200 p-1 py-2 md:flex-col md:py-3">
							<div className="h-1 w-1 rounded-full bg-black"></div>
							<div className="h-1 w-1 rounded-full bg-black"></div>
							<div className="h-1 w-1 rounded-full bg-black"></div>
							<div className="h-1 w-1 rounded-full bg-black"></div>
						</div>
						<DemoCode />
					</div>
				</div>
			</div>
		</article>
	)
}

export default Demo
