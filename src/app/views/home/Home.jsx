import React,{useState} from 'react'
import {Table} from '@material-ui/core'
import axios from 'axios'

export default function AppleContainer () {
    
    const [high, setHigh] = useState('')
    const [low, setLow] = useState('')
    const [open, setOpen] = useState('')
    const [close, setClose] = useState('')
    const predict = e => {
        e.preventDefault()
        axios.post(`http://localhost:8080/nasdaq/apple_pred`, {high:high, low: low,
        open: open, close: close})
            .then(res => {
                alert(`The Price Prediction is $ ${res.data["ajdclose"]} .`)

                
            })
            .catch(error => {
                alert("Please check the right number");
                window.location.reload();
            })

    }
    return (
        <Table>
        <table>
            <tr>
                <td>High</td>
                <td><input type="text" onChange={e => setHigh(`${e.target.value}`)}/></td>
            </tr>
            <tr>
                <td>Low</td>
                <td><input type="text" onChange={e => setLow(`${e.target.value}`)}/></td>
            </tr>
            <tr>
                <td>Open</td>
                <td><input type="text" onChange={e => setOpen(`${e.target.value}`)}/></td>
            </tr>
            <tr>
                <td>Close</td>
                <td><input type="text" onChange={e => setClose(`${e.target.value}`)}/></td>
            </tr>
            <tr>
                <td colSpan='2'><button onClick={predict}>예측 가격 조회</button></td>
            </tr>
        </table>
    </Table>
    )  
}