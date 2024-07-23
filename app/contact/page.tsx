import React from "react";
import {Input, Button} from "@nextui-org/react";

function contact() {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div key="bordered" className="flex w-[900px] flex-col md:flex-nowrap mt-14 mb-6 md:mb-0 gap-4">
        <div className="flex gap-4">
        <Input type="name" variant='bordered' placeholder="Your Name*" />
        <Input type="email" variant='bordered' placeholder="Email*" />
        </div>
        <Input type="text" variant='bordered' placeholder="Subject*" />
        <Input size='lg' type="text" variant='bordered' placeholder="Message*" />
      </div>
      <Button className="bg-primary-400 text-gray-200 " radioGroup="sm" variant="solid">
        Send Message
        </Button>
  </div>  
  )
}

export default contact