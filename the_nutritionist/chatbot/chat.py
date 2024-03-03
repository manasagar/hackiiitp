import os
from dotenv import load_dotenv
from langchain.document_loaders.csv_loader import CSVLoader
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_text_splitters import CharacterTextSplitter
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain_community.vectorstores import FAISS
load_dotenv()
def bot(query):

    llm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)

    embeddings = HuggingFaceEmbeddings()
    vectorstore = FAISS.load_local("chatbot/Faiss", embeddings)
    retriever = vectorstore.as_retriever(search_kwargs={"k": 4})

    qa = RetrievalQA.from_chain_type(llm=llm, chain_type="refine", retriever=retriever, return_source_documents=False)
    m=(qa.invoke({"query":query}))
    m=m['result'].replace('\n',' ')
    return m
