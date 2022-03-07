export const goToLogin =(navigate) => {
  navigate("/")
}

export const goToRegister =(navigate) => {
  navigate("/cadastro")
}

export const goToHomeFeed =(navigate, id) => {
  navigate(`/feed/:${id}`)
}

export const goToPost =(navigate, id) => {
  navigate(`/detalhes/${id}`)
}

export const goToAdd =(navigate) => {
  navigate("/adicionar")
}
