interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
  howFound: string;
  otherText: string;
  processNumber: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
  phone,
  howFound,
  otherText,
  processNumber,
}) => (
<body style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    background: '#f4f4f4', 
    color: '#333',
    fontSize: '16px' 
}}>
    <table style={{
        textAlign: "left",
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        borderCollapse: 'collapse',
        border: "2px solid #ddd", 
    }}>
        <tbody>
            <tr>
                <td style={{ padding: "20px" }}>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ padding: "8px" }}>
                                    <h2 style={{ margin: 0, color: '#555' }}>Nome:</h2>
                                </td>
                                <td style={{ padding: "8px" }}>
                                    <p style={{ margin: 0 }}>{name}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "8px" }}>
                                    <h2 style={{ margin: 0, color: '#555' }}>Email:</h2>
                                </td>
                                <td style={{ padding: "8px" }}>
                                    <p style={{ margin: 0 }}>{email}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "8px" }}>
                                    <h2 style={{ margin: 0, color: '#555' }}>Assunto:</h2>
                                </td>
                                <td style={{ padding: "8px" }}>
                                    <p style={{ margin: 0 }}>{subject}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "8px" }}>
                                    <h2 style={{ margin: 0, color: '#555' }}>Mensagem:</h2>
                                </td>
                                <td style={{ padding: "8px" }}>
                                    <p style={{ margin: 0 }}>{message}</p>
                                </td>
                            </tr>
                            {phone && (
                                <tr>
                                    <td style={{ padding: "8px" }}>
                                        <h2 style={{ margin: 0, color: '#555' }}>Telefone:</h2>
                                    </td>
                                    <td style={{ padding: "8px" }}>
                                        <p style={{ margin: 0 }}>{phone}</p>
                                    </td>
                                </tr>
                            )}
                            {howFound && (
                                <tr>
                                    <td style={{ padding: "8px" }}>
                                        <h2 style={{ margin: 0, color: '#555' }}>Como nos encontrou?:</h2>
                                    </td>
                                    <td style={{ padding: "8px" }}>
                                        <p style={{ margin: 0 }}>{howFound}</p>
                                    </td>
                                </tr>
                            )}
                            {otherText && (
                                <tr>
                                    <td style={{ padding: "8px" }}>
                                        <h2 style={{ margin: 0, color: '#555' }}>Outros textos:</h2>
                                    </td>
                                    <td style={{ padding: "8px" }}>
                                        <p style={{ margin: 0 }}>{otherText}</p>
                                    </td>
                                </tr>
                            )}
                            {processNumber && (
                            <tr>
                                <td style={{ padding: "8px" }}>
                                    <h2 style={{ margin: 0, color: '#555' }}>Número de processo:</h2>
                                </td>
                                <td style={{ padding: "8px" }}>
                                    <p style={{ margin: 0 }}>{processNumber}</p>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
);
