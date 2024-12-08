import React from 'react'
import Button from './ui/Button'
import Icons from './Icons'

const FormName = () => {
  return (
    <div className="border border-gray-200 border-b-transparent flex flex-row justify-between items-center w-2/5 h-[56px] px-5">
      <input
        placeholder="Untitled Form"
        type="text"
        className="w-full outline-none placeholder:text-base placeholder:font-semibold"
      />
      <Button icon={<Icons name="previewIcon" />} iconDirection="right">
        Preview
      </Button>
    </div>
  )
}

export default FormName
