function status(request, response) {
  response.status(200).json({ chave: "São pessoas acima da média" });
}

export default status;
