
import http from './http';


export async function getList(){
    try {
        return http.get('/api/getList');
    }catch(err){
        return err;
    }
}

export async function getAllList(){
    try{
        console.log('get /api/getAllList');
        return http.get('/api/getAllList');
    }catch(err){
        return err;
    }
}

//insert
export async function insertList(data){
    try{
        console.log('insert /api/insertList');
        // console.log(data);
        return http.post('/api/insertList', data);
    }catch(err){
        return err;
    }
}
//delete
export async function removeList(id){
    try{
        console.log('delete /api/removeList');
        return http.post('/api/removeList', id);
    }catch(err){
        return err;
    }
}

//insert card
export async function insertCardTitle(data){
    try{
        console.log('insertCard /api/insertCardTitle');
        return http.post('/api/insertCardTitle', data);
    }catch(err){
        return err;
    }
}

//edit card title
export async function editCardTitle(data){
    try{
        console.log('updatetitle /api/editCardTitle');
        return http.post('/api/editCardTitle', data);
    }catch(err){
        return err;
    }
}

//delete card title
export async function delCardTitle(data){
    try{
        console.log('deletetitle /api/delCardTitle');
        return http.post('/api/delCardTitle', data);
    }catch(err){
        return err;
    }
}

