import React, { useState } from 'react'

export const Surprise = () => {


        const [text, setText] = useState('');
        const [loading, setLoading] = useState(false);
        const [links, setLinks] = useState([]);

        const handleSubmit = async(evt) => {
            setLoading(true)
            evt.preventDefault();
            console.log(`Submitting ${text}`);

            const res = await fetch('https://fireship.io/snippets/link-preview-react/', {
                method: 'POST',
                body: JSON.stringify({ text })
            });

            const data = await res.json();

            setLinks(data);
            setLoading(false)
        }

        return (
            <div>
                <h1>Form</h1>
                Try this: <pre>some example text https://fireship.io and https://fireship.io/courses/javascript/</pre>

                <form onSubmit={handleSubmit}>
        <textarea rows="4" cols="50"
                  type="text"
                  value={text}
                  onChange={e => setText(e.target.value)}>

        </textarea>
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                <h2>Preview</h2>
                <p>{text}</p>

                {loading &&  <h3>Fetching link previews... 🤔🤔🤔</h3> }


                { links.map(obj => <PreviewCard key={obj.url} linkData={obj} />) }


            </div>
        )
    }

    function PreviewCard({ linkData }) {
        return (
            <a className="preview" href={linkData.url}>
                <img src={linkData.image} />
                <div>
                    <h4>{linkData.title}</h4>
                    <p>{linkData.description}</p>
                </div>
            </a>
        )
}