import React, { useState } from 'react';
import Modal from './Modal'
import { useLocation } from 'react-router-dom'

function ItemDetail({ removeDeleted, editListing }){
    const location = useLocation()
    const [listingDetail, setListingDetail] = useState(location.state.params)
    const [toUpdate, setToUpdate] = useState(false)
    const [clickModal, setClickModal] = useState(false)

    
    function handleDlt() {
        fetch(`http://localhost:3000/listings/${listingDetail.id}`, {
            method: 'DELETE'
        })
        removeDeleted(listingDetail.id)
    }
    function handleUpdate() {
        setToUpdate(toUpdate => !toUpdate)
    }

    function handleModalToggle(){
        setClickModal(clickModal => !clickModal)
    }

    const [editFormData, setEditFormData] = useState({
        title: listingDetail.title,
        description: listingDetail.description,
        price: listingDetail.price,
        image: listingDetail.image,
        category: listingDetail.category,
        barter: listingDetail.barter,
        for_sale: listingDetail.for_sale,
        barter_description: listingDetail.barter_description,
        location: listingDetail.location,
    })

   
    function handleInfoChange(e){
        setEditFormData({...editFormData, 
            [e.target.name] : e.target.value
        })
    }

    function handleEditCategoryChange(e){
        setEditFormData({...editFormData, 
            ["category"] : e.target.value
        })
    }


    function handleEditSaleTypeChange(e){
        if (e.target.value == "for_sale"){
            setEditFormData({...editFormData, 
                ["for_sale"] : true,
                ["barter"] : false
            })}
        else if (e.target.value == "barter"){
            setEditFormData({...editFormData, 
                ["barter"] : true, 
                ["for_sale"] : false,
            })}
        else if (e.target.value == "both"){
            setEditFormData({...editFormData, 
                ["for_sale"] : true,
                ["barter"] : true
            })}
    }

    function handleEditSubmit(e){
        e.preventDefault()

        const newItem = {
            title: editFormData.title,
            description: editFormData.description,
            price: Number(editFormData.price),
            image: editFormData.image,
            category: editFormData.category,
            barter: editFormData.barter,
            for_sale: editFormData.for_sale,
            barter_description: editFormData.barter_description,
            location: editFormData.location,
            user_id:  2,
            id: listingDetail.id
        }
       
        
        fetch(`http://localhost:3000/listings/${listingDetail.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newItem)
        })
       
            editListing(newItem)
            setListingDetail(newItem)
    }

  
    return (
       <div id="itemDetailDiv">
           <br></br>
            <h1>{listingDetail.title}</h1>
            <img src={listingDetail.image} alt={listingDetail.title}/>
            <p className="detailsP"><strong>Description: </strong>{listingDetail.description}</p>
            <p className="detailsP"><strong>For Sale: </strong>{listingDetail.for_sale ? "Yes" : "No"}</p>
            <p className="detailsP"><strong>Open to Trade: </strong>{listingDetail.barter ? "Yes" : "No"}</p>
            <p className="detailsP"><strong>Price: </strong>${listingDetail.price}</p>
            {listingDetail.barter ? <p className="detailsP"><strong>Willing to trade for: </strong>  {listingDetail.barter_description}</p> : null}
            <p className="detailsP"><strong>Located: </strong>{listingDetail.location}</p>
            <div className="iconBtn">
                {/* <button>Message seller</button> */}
                <p className="icon" onClick={handleModalToggle}>&#x2709; </p>
              
                <p className="icon" data-toggle="modal" data-target="#myModal" onClick={handleUpdate}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                </p>
                {/* <button onClick={handleUpdate}>Update Listing</button> */}
                {/* <button onClick={handleDlt}>Delete Listing</button> */}
                <p className="icon" onClick={handleDlt}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>    
                 </p>
            </div>
            {clickModal? <Modal handleModalToggle={handleModalToggle}/> : null}
            {toUpdate ? 
            
            <div id="updateform">
                <br></br><br></br><br></br><br></br>
            
                 <h2>Edit Your Listing</h2>
                    <form id="innerUpdateForm" onSubmit={handleEditSubmit}>
                        <div className="form-floating mb-3">
                            <input type="text" onChange={handleInfoChange} value={editFormData.title} name="title" className="form-control" id="floatingInput" placeholder="Item Name"/>
                            <label for="floatingInput">Item Name</label>
                        </div>
                    <div className="form-floating mb-3">
                            <textarea className="form-control" onChange={handleInfoChange} value={editFormData.description} name="description" placeholder="Description..." id="floatingTextarea2" ></textarea>
                            <label for="floatingInput">Description</label>
                        </div>
                    <div className="form-floating mb-3">
                            <input type="text" onChange={handleInfoChange} value={editFormData.location} name="location" className="form-control" id="floatingInput" placeholder="Where are you Located?"/>
                            <label for="floatingInput">Location</label>
                        </div>
                    <div className="form-floating mb-3">
                            <input type="number" onChange={handleInfoChange} value={editFormData.price} name="price" className="form-control" id="floatingInput" placeholder="Price"/>
                            <label for="floatingInput">Price</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" onChange={handleInfoChange} value={editFormData.image} name="image" className="form-control" id="floatingInput" placeholder="Image"/>
                            <label for="floatingInput">Image</label>
                        </div>
                    <label> Select Item Category:
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={handleEditCategoryChange}>
                            <option value="strings">Strings</option>
                            <option value="percussion">Percussion</option>
                            <option value="woodwind">Woodwind</option>
                            <option value="brass">Brass</option>
                            <option value="piano">Keyboard/Piano</option>
                            <option value="misc">Other</option>
                        </select> 
                    </label>
                        <br></br>
                        <br></br>
                    <label> Sell or Trade? 
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={handleEditSaleTypeChange}>
                        <option value="barter">Trade</option>
                        <option value="for_sale">Sell</option>
                        <option value="both">Both</option>
                    </select>
                    </label>
                    <br></br>
                    <br></br>
                    <label> If You Chose Barter, What Are You Looking To Trade For?
                    <div className="form-floating mb-3">
                            <input type="text" name="barter_description" className="form-control" id="floatingInput" placeholder="Where are you Located?"/>
                            <label for="floatingInput">Guitars, Drums, etc</label>
                        </div>
                    </label>
                    <br></br>
                    <br></br>
                    <button  className="btn btn-primary" type="submit">Edit Listing</button>
                    </form >
      </div> : null}
       </div>

        

    )
}

export default ItemDetail