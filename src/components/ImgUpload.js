import React, { useState } from 'react'
import './ImgUploads.css'

export const ImgUpload = () => {
    const [post, setPost] = useState({
        title: '',
        desc: '',
        photos: []
    });
    const [hightlight, setHighlight] = useState(false);
    const { title, desc, photos } = post;
    const handleChange = e => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = e => {
        let files = e.target.files;
        handfiles(files);
    }

    const handfiles = files => {
        let photosArr = [];
        for (let file of files) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('load', ()=>{
                let fileobj={
                    name:file.name,
                    type:file.type,
                    size:file.size,
                    src:reader.result
                }
                photosArr.push(fileobj);
                setPost({
                    ...post,
                    photos: [...photos,...photosArr]
                })
            });
        }
    }

    const handleDelete = e => {
        let target = e.target.parentElement;
        let targetIndex = target.dataset.imgindex * 1;
        //console.log(target, targetIndex);
        setPost({
            ...post,
            photos: [...photos.slice(0, targetIndex), ...photos.slice(targetIndex + 1)]
        })
    }

    const handleHighlight = e => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(true);
    }

    const handleUnhighlight = e => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(false);
    }

    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();

        let dt = e.dataTransfer;
        let files = dt.files;
        handfiles(files);
        setHighlight(false);
        console.log(files); //something as change

    }

    return(
        <div>
            <div className="file-upload">
                <h2>Image Drag & Drop & Preview</h2>
                <form className="" encType="">
                    <div className="custom-form-group">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={title}
                            onChange={handleChange}/>
                    </div>
                    <div className="custom-form-group">
                        <input
                            type="text"
                            name="desc"
                            placeholder="Description"
                            value={desc}
                            onChange={handleChange}/>
                    </div>
                    <div className="custom-form-group">
                        <div
                            className={hightlight ? "custom-file-drop-area highlight" : "custom-file-drop-area"}
                            onDragEnter={handleHighlight}
                            onDragOver={handleHighlight}
                            onDragLeave={handleUnhighlight}
                            onDrop={handleDrop}>
                            <input
                                type="file"
                                name="photos"
                                placeholder="Enter photos"
                                multiple
                                id="filephotos"
                                onChange={handleFileChange}/>
                            <label htmlFor="filephotos">Drag & Drop</label>
                        </div>
                        <div className="custom-file-preview">
                            {photos.length > 0 && photos.map((item,index)=>(
                                <div
                                    className="prev-img"
                                    key={index}
                                    data-imgindex={index}>
                                    <span onClick={handleDelete}>&times;</span>
                                    <img src={item.src} alt={item.name}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button type="submit" className="btn-submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

// this is the beautifull tutorial i used: https://www.youtube.com/watch?v=KtglGYGeFpc