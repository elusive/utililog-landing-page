function ScreensSection() {
    return (
        <section className="screens ml-6">
            <div className="container">
                <div className="m-4">
                    <img
                        className="rounded-lg"
                        src="images/demo-daily.png"
                        alt="Utililog daily log screen."
                    />
                    <figcaption className="screen-caption">
                        Utililog Daily Log Screen.
                    </figcaption>
                </div>
                
                <div className="flex flex-row gap-x-6">
                    <div className="m-4 w-2/3">
                    <img
                        className="rounded-lg"
                        src="images/demo-summary.png"
                        alt="Utililog summary screen."
                    />
                    <figcaption className="screen-caption">
                        Utililog Summary Screen.
                    </figcaption>
                    </div>
                    <div className="m-4 w-1/3">
                    <img
                        className="rounded-lg"
                        src="images/demo-crews.png"
                        alt="Utililog crews management screen."
                    />
                    <figcaption className="screen-caption">
                        Utililog Crews Screen.
                    </figcaption>
            </div>
</div>
            </div>
        </section>
    );
}

export default ScreensSection;
