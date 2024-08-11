export async function editarRelacionamentoUsuarioComentarioProfessor(
  cod_comentario,
  matricula,
  like,
  dislike
) {
  const data = {
    cod_comentario: cod_comentario,
    matricula: matricula,
    like: like,
    dislike: dislike,
  };
  const apiUrl = process.env.VUE_APP_API_URL;

  try {
    const response = await fetch(
      `${apiUrl}/usuario_comentario_professor/${cod_comentario}/${matricula}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao editar relacionamento");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return { success: false, message: "Erro ao editar relacionamento" };
  }
}

export async function editarRelacionamentoUsuarioComentarioMateria(
  cod_comentario,
  matricula,
  like,
  dislike
) {
  const data = {
    cod_comentario: cod_comentario,
    matricula: matricula,
    like: like,
    dislike: dislike,
  };
  const apiUrl = process.env.VUE_APP_API_URL;
  try {
    const response = await fetch(
      `${apiUrl}/usuario_comentario_materia/${cod_comentario}/${matricula}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao editar relacionamento");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return { success: false, message: "Erro ao editar relacionamento" };
  }
}
