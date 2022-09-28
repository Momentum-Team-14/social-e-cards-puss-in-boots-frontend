const handleUpdate = setter => event => setter(event.target.value)
const nothing = () => {}

export {
    handleUpdate,
    nothing,
}
