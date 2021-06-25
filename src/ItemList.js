import React from 'react';
import ItemCard from './ItemCard';
import Filter from './Filter'

function ItemList({ filteredByCat, setFilterChange, setSaleChange, saleTypeSelection}){

    const listings = () => (filteredByCat.map(listing => <ItemCard key={listing.id} listing={listing} />))

 
    return (
       <div className="itemList">
           {<Filter setFilterChange={setFilterChange} setSaleChange={setSaleChange} saleTypeSelection={saleTypeSelection} filteredByCat={filteredByCat}/> }
           {filteredByCat && listings()}
       </div>
    )
}

export default ItemList