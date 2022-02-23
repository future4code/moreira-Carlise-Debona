export const goToLogin =(navigate) => {
  navigate.push("/")
}

export const goToRegister =(navigate) => {
  navigate.push("/cadastro")
}

export const goToHomeFeed =(navigate) => {
  navigate.push("/feed")
}

export const goToPost =(navigate, id) => {
  navigate.push(`/comentarios/${id}`)
}

export const goToAdd =(navigate) => {
  navigate.push("/adicionar")
}
