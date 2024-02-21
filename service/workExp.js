export const addExperience = async (experienceData) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(experienceData)
        })
        const result = response.json()
        return result
        
    } catch (error) {
        return Promise.reject(error.message || "Something went wrong!")
    }
}