import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contacts = () => {
  return (
    <div className='color'>
     <h1>Contacts</h1><br /><br />
    <div className='cc'>
     <button className='button'>
     <MdEmail />
      <b>Email</b><br />
      <p>6530901005@h <br></br> tc.ac.th</p>
      </button>

     <button className='button2'>
      <FaLinkedin /><br /><br />
      <b>linkdin</b><br />
      <p>@Forestcrazy_dev</p>
      </button>

    <button>
    <FaGithub /><br /><br />
    <b>Github</b>
    <p>ForestCrazy</p>
    </button>
    </div>
    </div>

  )
}

export default Contacts
