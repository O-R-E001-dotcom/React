
import {useState, useEffect} from 'react';

function TitleUpdater() {
    const defaultTitle = 'Document 1';
    const [customTitle, setCustomTitle] = useState('')
    const maxChar = 60;

    useEffect(() => {
        if (customTitle.trim === '') {
            document.title= defaultTitle
        } else {
            document.title = `${customTitle}`
        }
    }, [customTitle]);

    function resetTitle() {
        setCustomTitle('')
        document.title=  defaultTitle;
    };

    return (
        <div>
            <h2>Document Title Updater</h2>

            <label htmlFor="title-input">Custom Title</label>
            <input 
                id='title-input'
                type="text"
                value={customTitle}
                placeholder='Type here...'
                onChange={(e) => {
                    if (e.target.value.length <= maxChar) {
                        setCustomTitle(e.target.value)
                    }
                }}
            />

            <p>
                {customTitle.length} / {maxChar} characters
            </p>

            <p><strong>Preview:</strong> '{defaultTitle}
                {customTitle ? ` - ${customTitle}` : ''} '</p>
            <button onClick={resetTitle}>Reset</button>
        </div>
    )
}

export default  TitleUpdater;