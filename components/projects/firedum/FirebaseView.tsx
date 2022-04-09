import React, { useEffect, useState } from 'react'
import { Home, ChevronRight, Database, Server, File, RefreshCw } from 'react-feather'
import FirebaseListItem from './FirebaseListItem'
import faker from 'faker'
import { ChatsType, UsersType } from './FirebaseTypes'
import { defaultCollections } from './DefualtCollection'
import { addedCollection } from './AddedCollection'

interface FirebaseViewProps {
	addDocsFunctionRef: React.MutableRefObject<() => void>
}

const FirebaseView: React.FC<FirebaseViewProps> = ({ addDocsFunctionRef }) => {
	const [collections, setCollections] = useState(defaultCollections)
	const [selectedCollection, setSelectedCollection] = useState<'chats' | 'users'>('users')
	const [selectedDoc, setSelectedDoc] = useState<ChatsType | UsersType>(collections[selectedCollection][0])

	addDocsFunctionRef.current = function addDocs() {
		setSelectedCollection('users')

		setCollections({
			users: [...defaultCollections.users, ...addedCollection.users],
			chats: defaultCollections.chats
		})
	}

	function resetCollections() {
		setCollections(defaultCollections)
		setSelectedDoc(defaultCollections[selectedCollection][0])
	}

	useEffect(() => {
		setSelectedDoc(collections[selectedCollection][0])
	}, [selectedCollection])

	return (
		<div className="flex h-[20rem] flex-col rounded-md border border-black bg-white shadow">
			<div className="flex flex-shrink-0 items-center gap-2 border-b border-black p-4 font-normal">
				<Home className="h-5 w-5" />
				<ChevronRight className="h-5 w-5" />
				<span className="text-sm">{selectedCollection}</span>
				<ChevronRight className="h-5 w-5" />
				<span className="text-sm">{selectedDoc.id}</span>
				<RefreshCw className="cursor ml-auto h-4 w-4 cursor-pointer" type="button" onClick={resetCollections} />
				{/* <button onClick={addDocs}>add</button> */}
			</div>
			<div className="grid flex-1 grid-cols-4 grid-rows-1 overflow-hidden">
				<div className="border-r border-r-black/20">
					<div className="flex items-center gap-2 border-b border-black/20 bg-gray-100/60 py-3 px-4">
						<Database className="h-4 w-4 flex-shrink-0" />
						<p className="text-sm font-light">Your database</p>
					</div>
					<ul className="overflow-y-scroll">
						<FirebaseListItem
							selected={selectedCollection === 'chats'}
							onClick={() => setSelectedCollection('chats')}
						>
							chats
						</FirebaseListItem>
						<FirebaseListItem
							selected={selectedCollection === 'users'}
							onClick={() => setSelectedCollection('users')}
						>
							users
						</FirebaseListItem>
					</ul>
				</div>
				<div className="flex flex-col border-r border-r-black/20">
					<div className="flex flex-grow-0 items-center gap-2 border-b border-black/20 bg-gray-100/60 py-3 px-4">
						<Server className="h-4 w-4 flex-shrink-0" />
						<p className="text-sm font-light">{selectedCollection}</p>
					</div>
					<ul className="h-full overflow-y-scroll">
						{collections[selectedCollection]
							.sort((a, b) => (a.id.toLowerCase() > b.id.toLowerCase() ? 1 : -1))
							.map((doc) => (
								<FirebaseListItem
									onClick={() => setSelectedDoc(doc)}
									selected={selectedDoc.id === doc.id}
									key={doc.id}
									isNew={!!addedCollection.users.some((document) => document.id === doc.id)}
								>
									{doc.id}
								</FirebaseListItem>
							))}
					</ul>
				</div>
				<div className="col-span-2 flex flex-col">
					<div className="flex items-center gap-2 border-b border-black/20 bg-gray-100/60 py-3 px-4">
						<File className="h-4 w-4 flex-shrink-0" />
						<p className="text-ellipsis text-sm font-light">{selectedDoc.id}</p>
					</div>
					<ul className="space-y-2 overflow-y-scroll p-4">
						{Object.keys(selectedDoc.fields).map((field) => {
							// @ts-ignore
							const value = selectedDoc.fields[field]
							return (
								<li key={field} className="text-xs font-normal text-black/70 md:text-sm lg:text-base">
									{field}:
									<span className="ml-2 text-black">
										{typeof value === 'string'
											? `"${value}"`
											: Array.isArray(value)
											? `[${value.join(', ')}]`
											: value + ''}
									</span>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FirebaseView
