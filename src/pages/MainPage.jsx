import React, { useState } from 'react'
import Content from '../layouts/ContentPage'
import SearchMeal from '../components/SearchMeal'
import ReceiptList from '../components/ReceipetListItem'
import api from '../api'

export default function MainPage() {
    const [receipts, setReceipts] = useState([]);

    const onSearchHandle = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const str = formData.get("search");
        const res = await api.getReceipt(str);

        if (res) setReceipts(res);
    }

    const selectDishType = async (e) => {
        e.preventDefault();
        const res = await api.getReceipt(e.target.value);
        if (res) setReceipts(res);
    }

    return (
        <div>
            <Content />
            <SearchMeal onSearch={onSearchHandle} />

            <div className="selectDishContainer">
                <button value="salad" onClick={selectDishType} className="selectDishItem">Salad</button>
                <button value="soup" onClick={selectDishType} className="selectDishItem">Soup</button>
                <button value="main" onClick={selectDishType} className="selectDishItem">Main course</button>
                <button value="biscuits and cookies" onClick={selectDishType} className="selectDishItem">Biscuits and cookies</button>
                <button value="drinks" onClick={selectDishType} className="selectDishItem">Drinks</button>
            </div>

            {receipts.length ? <ReceiptList receipts={receipts} /> : <div className="noContent">No content...</div>}

        </div>
    )
}
