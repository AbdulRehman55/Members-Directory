// import axios from 'axios'
import { callApi } from '../Services'

async function getAllMembers(): Promise<any> {
    try {
        const res = await callApi({
            path: '/allmembers',
        })
        return res.Members.Member
    } catch (err) {
        console.log(err)
        return err
    }
}
async function getMemberProfileById(id): Promise<any> {
    try {
        const res = await callApi({
            path: `/memberById/${id}`,
        })
        return res.Members.Member
    } catch (err) {
        console.log(err)
        return err
    }
}

export { getAllMembers, getMemberProfileById }
