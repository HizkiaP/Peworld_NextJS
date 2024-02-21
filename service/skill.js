export const addSkill = async (skill) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({skill_name: skill})
        })
        const result = response.json()
        return result
        
    } catch (error) {
        return Promise.reject(error.message || "Something went wrong!")
    }
}

export const getSkill = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        const result = response.json()
        return result
    } catch (error) {
        return Promise.reject(error.message || "Something went wrong!")
    }
}

export const deleteSkill = async (skill_id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills/${skill_id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        const result = response.json()
        return result
    } catch (error) {
        return Promise.reject(error.message || "Something went wrong!")
    }

}