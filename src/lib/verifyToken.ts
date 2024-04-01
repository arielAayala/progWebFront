import * as jose from "jose";

export async function verifyJwt(cookie: any) {
	const secret = jose.base64url.decode("SECRET");
	const jwt =
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTE5MzMwOTIsImV4cCI6MTcxMTkzNjY5MiwiZGF0YSI6eyJuYW1lVXNlciI6ImFyaWVsIiwicHJvZmlsZXNVc2VyIjpbeyJuYW1lUHJvZmlsZSI6ImFkbWluaXN0cmFkb3IiLCJpZFByb2ZpbGUiOjF9LHsibmFtZVByb2ZpbGUiOiJ0dXJpc3RhIiwiaWRQcm9maWxlIjoyfV19fQ.PQS6svdZ1RmPz2YmvYyIyqDG1Die_MMp_DFQYkxq3BI";

	const { payload, protectedHeader } = await jose.jwtDecrypt(jwt, secret);

	console.log(protectedHeader);
	console.log(payload);
}
