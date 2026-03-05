"use client"

import { useState } from "react"
import { Send, X, CheckCircle } from "lucide-react"
import { submitLead } from "@/lib/submitLead"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  "SEO & Content",
  "Paid Ads (PPC)",
  "Social Media",
  "Web Development",
  "Branding",
  "Email Marketing",
]

export default function LeadForm() {

  const [formData,setFormData] = useState({
    name:"", email:"", phone:"", service:"", message:""
  })

  const [errors,setErrors] = useState<any>({})
  const [loading,setLoading] = useState(false)
  const [success,setSuccess] = useState(false)

  const update = (field:string)=>(e:any)=>{

    const value = e.target.value

    if(field==="phone"){
      if(!/^[0-9]*$/.test(value)) return
      if(value.length>10) return
    }

    setFormData(p=>({...p,[field]:value}))
    setErrors((p:any)=>({...p,[field]:""}))
  }

  const validate = ()=>{

    const err:any = {}

    if(!formData.name.trim())
      err.name = "Full name is required"

    if(!formData.email.trim())
      err.email = "Email is required"

    else if(!/\S+@\S+\.\S+/.test(formData.email))
      err.email = "Invalid email address"

    if(!formData.phone)
      err.phone = "Phone number required"

    else if(formData.phone.length !== 10)
      err.phone = "Phone must be 10 digits"

    if(!formData.service)
      err.service = "Select a service"

    // if(!formData.budget)
    //   err.budget = "Select your budget"

    setErrors(err)

    return Object.keys(err).length===0
  }

  const handleSubmit = async(e:any)=>{

    e.preventDefault()

    if(!validate()) return

    setLoading(true)

    try{

      await submitLead(formData)

      setSuccess(true)

      setFormData({
        name:"", email:"", phone:"", service:"", message:""
      })

    }catch(err){
      console.log(err)
    }

    setLoading(false)
  }

  const input =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"

  const error = "text-red-500 text-xs mt-1"

  return (

<>
{/* SUCCESS MODAL */}

<AnimatePresence>

{success && (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md px-6"
>

<motion.div
initial={{scale:0.8,opacity:0,y:40}}
animate={{scale:1,opacity:1,y:0}}
exit={{scale:0.8,opacity:0}}
transition={{type:"spring",stiffness:120}}
className="relative max-w-md w-full bg-neutral-900 border border-white/10 rounded-3xl p-10 text-center shadow-2xl"
>

<button
onClick={()=>setSuccess(false)}
className="absolute top-4 right-4 text-gray-400 hover:text-white"
>
<X size={20}/>
</button>

<motion.div
initial={{scale:0}}
animate={{scale:1}}
transition={{delay:0.2,type:"spring"}}
className="flex justify-center mb-6"
>
<CheckCircle className="text-green-400 w-14 h-14"/>
</motion.div>

<h3 className="text-2xl font-bold text-white mb-3">
Submitted Successfully
</h3>

<p className="text-gray-400 text-sm leading-relaxed">
Thanks for reaching out to <span className="text-primary font-semibold">HustlersTech</span>.
Our team will contact you shortly to discuss your project.
</p>

</motion.div>

</motion.div>

)}

</AnimatePresence>

{/* FORM */}

<form
onSubmit={handleSubmit}
className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.4)]"
>

<h2 className="text-xl font-bold text-white mb-6">
Get Your Free Strategy
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

<div>
<input
placeholder="Full Name *"
value={formData.name}
onChange={update("name")}
className={input}
/>
{errors.name && <p className={error}>{errors.name}</p>}
</div>

<div>
<input
type="email"
placeholder="Email *"
value={formData.email}
onChange={update("email")}
className={input}
/>
{errors.email && <p className={error}>{errors.email}</p>}
</div>

<div>
<input
placeholder="Phone Number *"
value={formData.phone}
onChange={update("phone")}
className={input}
/>
{errors.phone && <p className={error}>{errors.phone}</p>}
</div>

{/* <input
placeholder="Company / Brand"
value={formData.company}
onChange={update("company")}
className={input}
/> */}

<div>
<select
value={formData.service}
onChange={update("service")}
className={input}
>

<option value="" className="bg-neutral-900 text-white">
Service Needed
</option>

{services.map(s=>(
<option key={s} value={s} className="bg-neutral-900 text-white">
{s}
</option>
))}

</select>

{errors.service && <p className={error}>{errors.service}</p>}
</div>

{/* <div>
<select
value={formData.budget}
onChange={update("budget")}
className={input}
>

<option value="" className="bg-neutral-900 text-white">
Monthly Budget
</option>

<option className="bg-neutral-900 text-white">$1k - $5k</option>
<option className="bg-neutral-900 text-white">$5k - $10k</option>
<option className="bg-neutral-900 text-white">$10k+</option>

</select>

{errors.budget && <p className={error}>{errors.budget}</p>}
</div> */}

</div>

<textarea
rows={3}
placeholder="Tell us about your goals..."
value={formData.message}
onChange={update("message")}
className={input+" mb-6 resize-none"}
/>

<button
disabled={loading}
className="w-full bg-gradient-to-r from-primary to-blue-500 text-white font-semibold text-lg py-4 rounded-xl hover:scale-[1.02] transition flex items-center justify-center gap-2 cursor-pointer"
>

{loading
? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
: <>Get My Free Strategy <Send size={18}/></>
}

</button>

</form>
</>
  )
}