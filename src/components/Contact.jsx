
function Contact() {
  return (
    <div className="px-[20px] py-[40px] lg:px-[60px] md:w-[600px] mx-auto md:px-[40px] lg:px-[60px]">
       <h2 className="text-center text-[2rem] font-bold mb-10 xl:px-[40px]">CONTACT US</h2>
       <div className="form-container py-[30px] px-[20px] rounded-[10px]">
            <h3 className="text-[1.5rem] font-bold text-center mb-5">How can we help you?</h3>
            <h3 className="text-[1.2rem] font-bold text-center mb-3">Got a question, comment or suggestion?</h3>
            <h3 className="text-[1.2rem] font-bold text-center mb-5">We'd love to hear from you.</h3>
            <form className="flex flex-col">
                <input type="email" name="" id="" className="text-black mb-[20px] rounded-[10px] text-[18px] py-[5px] pl-[20px]" placeholder="Enter Email" required/>
                <textarea name="" id="" cols="30" rows="5" className="text-black mb-[20px] rounded-[10px] text-[18px] py-[5px] px-[20px]" placeholder="Message Here" required></textarea>
                <input type="submit" value="SEND" className="font-bold text-[1.2rem] rounded-[20px] border-2 border-white cursor-pointer py-[10px] bg-[#8B00F9]"/>
            </form>
       </div>
    </div>
  )
}

export default Contact