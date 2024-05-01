import Link from "next/link"

export const ButtonNewArticle = () => {
    return(
        <div className="flex justify-end items-end mt-4">
        <Link href="/publicacoes-admin/novo-artigo">
          <button 
          className="bg-black text-white rounded-lg px-4 py-2 mr-4">
            PUBLICAR ARTIGO
          </button>
        </Link>
    </div>

    )
}