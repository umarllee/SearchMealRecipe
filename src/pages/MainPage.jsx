import React, {useState} from 'react'
import Content from '../layouts/ContentPage'
import SearchMeal from '../components/SearchMeal'
import ReceiptList from '../components/ReceipetListItem'
import api from '../api'

export default function MainPage() {
    const [receipts, setReceipts] = useState([]);

    const onSearchHandle = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const searchStr = formData.get("search");
        console.log(searchStr);

        const res = await api.getReceipt(searchStr);
       
        if(res)  setReceipts(res);
    }

    return (
        <div>
            <Content />
            <SearchMeal onSearch = {onSearchHandle}/>
            {receipts.length?  <ReceiptList receipts= {receipts}/> : <div className="noContent">No content...</div>}

        </div>
    )
}
