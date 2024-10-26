import Hero from "../components/Hero";


export default function Home() {
  return (
    
    <>
      <Hero />
      <section className=" text-center mt-16">
        <p className="text-gray-600">Trusted by those companies:</p>
        <div className="flex gap-8 *:h-6 mt-6 mb-2 justify-center">
            <img src="https://images.ctfassets.net/lh3zuq09vnm2/6Id0eTlVwUSuDcoeLXS6wh/ab8d55b51fbc0e2bc599a6f180ef6c99/Invision.svg"></img>
            <img src="https://images.ctfassets.net/lh3zuq09vnm2/3A5yNJ7WfWikTXKsk7r4hh/4060c710bc560b59a0dd06b6521fbe94/Decathlon.svg"></img>
            <img src="https://images.ctfassets.net/lh3zuq09vnm2/18dCY8kGkSbfdNB2Eod1Pp/4768154e8873caa4c1574499dc4e2aab/Microsoft_Logo.svg"></img>
            <img src="https://images.ctfassets.net/lh3zuq09vnm2/7hhEfCdZPI7mPC24fFsC94/adf392604ef673a224307e48ac87bd96/Adobe.svg"></img>
            <img src="https://images.ctfassets.net/lh3zuq09vnm2/1F2mq86JzeTrvpY7QdJZmh/b29471d788aabbc36a27d5dea6dae917/Nintendo.svg"></img>

           </div>
      </section>
    </>
    
      
    
    

  );
}
