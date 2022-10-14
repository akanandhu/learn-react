import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useQuery } from 'react-query'
import axiosInstance from '../../Axios/AxiosIntercept'
import { ISegment } from './segment'



export default function Example() {
    //API CALL to Display Segment Data
    const [segment, setSegment] =  useState<ISegment[]>([])
    const getSegments = async () => {
      const {data} =  await  axiosInstance.get('/segments')
      return data;
      
      }

      const {data:segmentData} =  useQuery(['segments'],getSegments)

      
    

      const [state, setState] = useState<any | ISegment>()
        
      const userDefaultData = () => {
        const user_id = localStorage.getItem('sub-id')
        axiosInstance.get(`/segments/${user_id}`).then((res) => {
          console.log('Res',res.data)
             setState(res.data);           
        })
      }
      const {data:any} =  useQuery<any>('defaultSubject',userDefaultData)
      
      

      const [selected, setSelected] = useState<ISegment>(segment);
      
      //API CALL to get User Data
      const userLogData = async () => {
          await axiosInstance.get(`/auth/me`).then((res) => {
          console.log("ResponseData",res.data);
         const result =  localStorage.setItem('sub-id',res.data.user_profile.default_segment_id);
          console.log(result);
        })
      }
     const {data:userLogDetail} =  useQuery(['userLogData'], userLogData)

      
      
   
  return (
    <div className=" absolute z-20 pt-[1.5%] pl-[2%] w-72">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button   className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span  className="block truncate">{selected ? selected.name: {state} }</span>
            
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {segmentData?.map((obj:any) => (
                
                <Listbox.Option onClick={()=> {
                  console.log(obj.id);
                  localStorage.setItem('class-State', obj.id);
                }}
                  key={obj.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={obj}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {obj.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          

                        </span>
                      ) : null}
                    </>
                 )}
                 
                </Listbox.Option>
                ))}
                
                </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}