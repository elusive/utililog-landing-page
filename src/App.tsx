import './App.css'

function App() {

  return (
    <>
       <header className="container mx-auto px-12 align-center">
        <img className="align-center" src="images/utililog_logo_dark.png" />
    </header>
    <main className="container mx-auto px-40 align-center">
        <section className="max-w-4xl py-16 lg:pb-30">
            <div className="container">
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-20 m:gap-y-14">
                    <div className="flex h-full w-80 flex-col items-center lg:items-start">
                        <figure className="mb-4">
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/checked-checkbox.png" alt="checked-checkbox"/>
                        </figure>
                        <div className="px-0.5 text-center lg:text-left">
                            <h4 className="merriweather-bold text-2xl mb-2">Always Ready</h4>
                            <p>Daily operations information always displayed/ready for next day.</p>
                        </div>
                    </div>
                    <div className="flex h-full w-80 flex-col items-center lg:items-start">
                        <figure className="mb-4">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/pin3.png" alt="pin3"/>
                        </figure>
                        <div className="w-full px-0.5 text-center lg:text-left">
                            <h4 className="merriweather-bold text-2xl mb-2">Digital Tag Data</h4>
                            <p>Digital tag book visible to both operators and subsequent shifts.</p>
                        </div>
                    </div>
                    <div className="flex h-full w-80 flex-col items-center lg:items-start">
                        <figure className="mb-6">
                            <img width="45" height="45" src="https://img.icons8.com/external-prettycons-flat-prettycons/47/external-search-essentials-prettycons-flat-prettycons.png" alt="search"/>
                        </figure>
                        <div className="w-full px-0.5 text-center lg:text-left">
                            <h4 className="merriweather-bold text-2xl mb-2">Find Your Data</h4>
                            <p>Searchable database of tags, ops log, incidents, work orders.</p>
                        </div>
                    </div>
                    <div className="flex h-full w-80 flex-col items-center lg:items-start">
                        <figure className="mb-6">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/lock--v1.png" alt="lock--v1"/>
                        </figure>
                        <div className="w-full px-0.5 text-center lg:text-left">
                            <h4 className="merriweather-bold text-2xl mb-2">Eliminate Inacuracies</h4>
                            <p>Completely removes the possible inaccuracies of personal notes or handwriting</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main> 

    </>
  )
}

export default App
