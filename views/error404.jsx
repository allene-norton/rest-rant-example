const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/404cat.jpg" alt="Cat looking at computer" />
                    <div>
                        Photo by <a href="https://unsplash.com/@serejaris?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sereja Ris</a> on <a href="https://unsplash.com/s/photos/cat-computer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}
module.exports = error404