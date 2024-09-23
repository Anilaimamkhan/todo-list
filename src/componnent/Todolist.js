




import React, { useEffect, useState } from 'react'
import "../componnent/Todo.css"

function getFun() {
    let list = localStorage.getItem("list")
    if (list) {
        return JSON.parse(localStorage.getItem("list"))
    }
    else {
        return []
    }
}
const Todolist = () => {
    const [addInput, setAddInput] = useState("");
    // const [addItem, setAddItem] = useState(getFun())
    const [addItem, setAddItem] = useState(getFun())

    const [addIcon, setAddIcon] = useState(true)

    const [isEditItem, setIsEditItem] = useState(null)
    // const [dellAll, setDellAll] = useState()

    const addChange = (e) => {
        setAddInput(e.target.value)
    }

    const addFun = () => {
        if (!addInput) {

        } else if (addInput && !addIcon) {
            setAddItem(addItem.map((elem) => {
                if (elem.id === isEditItem) {
                    return {...elem, name:addInput}
                }
                return elem;
            }
        )
    )
    setAddIcon(true)
    setAddInput("")

    setIsEditItem(null)       
 }

        else {
            const allInputData = {
                id: new Date().getTime().toString(),
                name: addInput
            }
            setAddItem([...addItem, allInputData])
            setAddInput("")
        }

    }
    const del = (index) => {
        const upDate = addItem.filter((elem) => {
            return index !== elem.id
        })

        setAddItem(upDate)
    }

    const editItem = (id) => {
        const newEdit = addItem.find((elem) => {
            return elem.id === id
        })
        // console.log(newEdit)
        setAddIcon(false)
        setAddInput(newEdit.name)
        setIsEditItem(id)
    }

    const alldelet = () => {
        setAddItem([])
    }

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(addItem))
    }, [addItem])
    return (
        <>
            <div className="main_container">
                <div className="main_box">
                    <h2>TODO liST</h2>
                    <div className="input">

                        <input type="text" placeholder='add item' value={addInput} onChange={addChange} />
                        {

                            addIcon ? <i title='add item' onClick={addFun} className="fa-solid fa-plus "></i> : <i title='edit item' onClick={addFun} className="fa-solid fa-pen-to-square "></i>
                        }


                    </div>
                    {
                        addItem.map((elem) => {
                            return (
                                <div className='box_item' key={elem.id} >
                                    <ul>
                                        <li> {elem.name} </li>
                                        <div>
                                            <i title='edit item' onClick={() => editItem(elem.id)} className="fa-solid fa-pen-to-square "></i>
                                            <i title='delet' onClick={() => del(elem.id)} className="fa-solid fa-trash"></i>
                                        </div>

                                    </ul>
                                </div>
                            )
                        })
                    }
<button className="btn" title='delet All' onClick={alldelet}>all remove</button> 


                </div>
            </div>
        </>
    )
}

export default Todolist









// import React, { useEffect, useState } from 'react'

// const getFun = () => {
//     let list = localStorage.getItem("list");
//     console.log(list)
//     if (list) {
//         return JSON.parse(localStorage.getItem("list"))
//     } else {
//         return []
//     }

// }
// const Todolist = () => {
//     const [item, setItem] = useState("")
//     const [addItem, setAddItem] = useState(getFun())
//     const [changeIcon, setChangeIcon] = useState(true)
//     const [editItem, setEditItem] = useState(null)

//     const inputChangeFun = (e) => {
//         setItem(e.target.value)
//     }
//     const addFun = (id) => {
// if(item && !changeIcon){
// setItem(item.map((elem)=> {
//     // return 
//     if(elem.id === editItem ){
//         return {...elem , name : item}
//     }
//     return elem
// }))
// }else{
//     const editItem = {
//         id: new Date().getTime().toString(),
//         name: item
//     }
// }

//         setAddItem([...addItem, editItem])
//         // setStore()
//         setItem("")
//         setEditItem(id)
//     }
//     const delFun = (index) => {
//         const upDate = addItem.filter((elem) => {
//             return index !== elem.id
//         }
//         )
//         setAddItem(upDate)
//     }



//     useEffect(() => {
//         localStorage.setItem('list', JSON.stringify(addItem))
//     }, [addItem])

//     const edit = (id) => {
//         const textFilter = addItem.find((elem) => {
//             return id === elem.id
//         })
//         setChangeIcon(false)
//         setItem(textFilter.name)
//     }

//     const deletFun = () => {

//         setChangeIcon(true)
//         setAddItem("")
//     }

//     return (
//         <>

//             <div className="container">
//                 <div>
//                     <input type="text" placeholder='add list' value={item} onChange={inputChangeFun} />
//                     {
//                         changeIcon ? <button onClick={addFun}>+</button> : <button onClick={deletFun}>*</button>
//                     }


//                 </div>
//                 <div >
//                     {
//                         addItem.map((elem) => {
//                             return (
//                                 <ul >
//                                     <div style={{ display: 'flex', marginTop: "20px" }}>
//                                         <li key={elem.id}>{elem.name}</li>
//                                         <button onClick={() => edit(elem.id)}>edit *</button>
//                                         <button style={{ margin: "3px" }} onClick={() => delFun(elem.id)}>del</button>
//                                     </div>

//                                 </ul>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }


// export default Todolist



// import React, { useEffect, useState } from 'react'
// import "../componnent/Todo.css"

// const getUpDate=()=>{
// const list = localStorage.getItem("list")
// console.log(list)
// if(list){
// return JSON.parse(localStorage.getItem("list"))
// }else{
//     return []
// }
// }

// const Todolist = () => {
//     const [item, setItem] = useState("")
//     const [addItem, setAddItem] = useState(getUpDate())
//     const [toggleIcon, setToggleIcon] = useState(true)
//     const [edit, setEdit] = useState(null)

// useEffect(()=>{
// localStorage.setItem("list", JSON.stringify(addItem))
// },[addItem])

//     const changeHandler = (e) => {
//         setItem(e.target.value)
//     }
//     const addFun = () => {

//         const unique = {
//             id: new Date().getTime().toString(),
//             name: item
//         }
//         setAddItem([...addItem, unique])
//         setItem("")

//     }
//     const delFun = (ind) => {
//         const delMactch = addItem.filter((elem) => {
//             return ind !== elem.id
//         })
//         console.log(delMactch)
//         setAddItem(delMactch)
//     }
//     const addFunEdit = () => {
//         if (item && !toggleIcon) {
//             setAddItem(
//                 addItem.map((elem) => {
//                     if (edit === elem.id) {
//                         return { ...elem, name: item }
//                     }
//                     return elem
//                 }
//                 ))
//             setToggleIcon(true)
//             setItem("")
//         }

//     }
//     const editFun = (id) => {
//         const editChange = addItem.find((elem) => {
//             return id === elem.id
//         })
//         console.log(editChange)
//         setItem(editChange.name)
//         setToggleIcon(false)
//         setEdit(id)
//     }

//     return (
//         <>
//             <div className="container">
//                 <input type="text" placeholder='add item' onChange={changeHandler} value={item} />
//                 {
//                     toggleIcon ? <button onClick={addFun}>add</button> : <button onClick={addFunEdit}>edit#</button>
//                 }

//             </div>
//             <div className="container">
        
//                 {
//                     addItem.map((elem) => {
//                         return <div key={elem.id} className='box'>
//                             <p>{elem.name}</p>
//                             <button onClick={() => editFun(elem.id)}>edit#</button>

//                             <button onClick={() => delFun(elem.id)}>*</button>


//                         </div>
//                     })
//                 }
    
//             </div>
//         </>
//     )
// }

// export default Todolist
