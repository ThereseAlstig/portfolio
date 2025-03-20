export const FilmPresentation = () => {

    return(
        <div className="">
            <h1>Film Presentation</h1>

            <video controls width="80%">
                <source src="/min-film.mp4" type="video/mp4" />
                Din webbläsare stödjer inte video.
            </video>
        </div>
    )
}