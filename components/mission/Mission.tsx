"use client"

import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Mission() {
  let [categories] = useState({
    Mission: [
      {
        id: 1,
        title: 'To the lead organization on matters pertaining to stroke prevention, control, management and rehabilitation.',
        
      }
    ],
    Vision: [
      {
        id: 1,
        title: 'To ensure that the youth and the aged are well educated on the prevention, control and management of stroke and providing support to people who have developed stroke.',
        
      }
    ],
    Values: [
      {
        id: 1,
        title: 'Commitment to Excellence',
       
      },
      {
        id: 2,
        title: 'Education and Awareness',
       
      },
      {
        id: 3,
        title: 'Patient-Centricity',
        
      },
      {
        id: 4,
        title: 'Empathy and Compassion',
        
      },
      
    ],
  })

  return (
    <section className="flex justify-center items-center border-b border-gray-200 bg-gray-100 border-t">
        <div className="w-full max-w-xl px-4 py-16 sm:px-0 shadow-xl ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-indigo/10 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo/50 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white dark:bg-dark p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    </section>
  )
}
