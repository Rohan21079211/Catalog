import React ,{useState} from 'react'
import ApexChart from '../ApexChart';




const Section = () => {
    const [activeTab ,setActiveTab] = useState("tab2")

    const tabs =[
        {id:"tab1",label:"Summary"},
        {id:"tab2",label:"Chart"},
        {id:"tab3",label:"Statistics"},
        {id:"tab4",label:"Analysis"},
        {id:"tab5",label:"Settings"}
    ];
    const tabContent ={
        tab1: (
            <div>
               <h2 className='m-10 text-5xl font-bold '>Welcome</h2>
               <p className='m-10 '>A mutual fund is a pooled investment vehicle that collects money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other assets. Managed by professional fund managers, mutual funds offer investors a convenient way to access a broad range of securities, reducing risk through diversification. They are categorized into different types, such as equity funds, debt funds, hybrid funds, and index funds, each catering to different risk appetites and investment goals. Mutual funds provide benefits like liquidity, professional management, and affordability, making them a popular choice for both beginner and experienced investors. However, they also come with risks, including market fluctuations and management fees. Investors should carefully evaluate their financial goals and risk tolerance before selecting a mutual fund. </p>
            </div>
        ),
        tab2: (
            <>
            <div className='w-full h-full'>
            <ApexChart/>
            </div>

            </>
        ),
        tab3: (
            <div>
               <h2 className='m-10 text-5xl font-bold '>Welcome</h2>
               <p className='m-10 '>The stock market is a marketplace where buyers and sellers trade shares of publicly listed companies. It serves as a platform for companies to raise capital by issuing stocks, while investors can buy shares to gain ownership and potentially earn profits through price appreciation or dividends. The stock market operates through exchanges like the New York Stock Exchange (NYSE), Nasdaq, and Bombay Stock Exchange (BSE). It is influenced by various factors such as economic conditions, corporate earnings, interest rates, and geopolitical events. Investors participate in the stock market for long-term wealth creation, trading opportunities, or portfolio diversification. While it offers the potential for high returns, it also carries risks due to market volatility. Successful investing in the stock market requires research, risk management, and a well-planned strategy.</p>
            </div>
        ),
        tab4: (
            <div>
               <h2 className='m-10 text-5xl font-bold '>Welcome</h2>
               <p className='m-10 '>The stock market is a marketplace where buyers and sellers trade shares of publicly listed companies. It serves as a platform for companies to raise capital by issuing stocks, while investors can buy shares to gain ownership and potentially earn profits through price appreciation or dividends. The stock market operates through exchanges like the New York Stock Exchange (NYSE), Nasdaq, and Bombay Stock Exchange (BSE). It is influenced by various factors such as economic conditions, corporate earnings, interest rates, and geopolitical events. Investors participate in the stock market for long-term wealth creation, trading opportunities, or portfolio diversification. While it offers the potential for high returns, it also carries risks due to market volatility. Successful investing in the stock market requires research, risk management, and a well-planned strategy.</p>
            </div>
        ),
        tab5: (
            <div>
               <h2 className='m-10 text-5xl font-bold '>Welcome</h2>
               <p className='m-10 '>Schools are institutions designed to provide education to students. They play a crucial role in shaping individuals by imparting knowledge, skills, and values necessary for personal development and societal contribution. Schools vary in level, from preschools (for early childhood education) to elementary, middle, and high schools, offering education in various subjects such as mathematics, science, language, and arts.

</p>
            </div>
        )
    }
        

    const clickEventHandler = (id)=>{
        setActiveTab(id)
    }
  return (
    <> 
    <div className="flex gap-7 mt-10  ">
    {tabs.map((tab) =>(
        <button key={tab.id} className={`px-4 py-4   ${activeTab === tab.id ? "border-[#4B40EE] text-2xl border-b-4 py-4" :"text-[#6F7177] text-2xl py-4"}`}
        onClick={()=>clickEventHandler(tab.id)}>{tab.label}</button>))}
        
    </div>
    <div className=''> {tabContent[activeTab]}</div>
    
  </>
  )
}

export default Section; 