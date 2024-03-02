
from langchain.memory import ConversationBufferWindowMemory
import os
from transformers import LlamaTokenizer, LlamaForCausalLM, GenerationConfig, pipeline
from langchain_community.llms import HuggingFacePipeline
from langchain import PromptTemplate, LLMChain
import torch
from langchain import OpenAI, ConversationChain, LLMChain, PromptTemplate
from langchain.memory import ConversationBufferWindowMemory
os.environ["HUGGINGFACEHUB_API_TOKEN"] ="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"
from langchain.llms import HuggingFaceHub
from langchain import PromptTemplate, LLMChain
from langchain.chains.conversation.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from langchain.chains.conversation.memory import ConversationBufferMemory
from langchain.chains import ConversationChain

def bot(con):

    

    memory = ConversationBufferMemory()
    flan_t5 = HuggingFaceHub(
        repo_id="google/flan-t5-xxl",
        model_kwargs={"temperature":1 }
    )
    



    


    template = """Assistant is a large language model trained by OpenAI.

Assistant is designed to be able to assist with a wide range of tasks, from answering simple questions to providing in-depth explanations and discussions on a wide range of topics. As a language model, Assistant is able to generate human-like text based on the input it receives, allowing it to engage in natural-sounding conversations and provide responses that are coherent and relevant to the topic at hand.

Assistant is constantly learning and improving, and its capabilities are constantly evolving. It is able to process and understand large amounts of text, and can use this knowledge to provide accurate and informative responses to a wide range of questions. Additionally, Assistant is able to generate its own text based on the input it receives, allowing it to engage in discussions and provide explanations and descriptions on a wide range of topics.

Overall, Assistant is a powerful tool that can help with a wide range of tasks and provide valuable insights and information on a wide range of topics. Whether you need help with a specific question or just want to have a conversation about a particular topic, Assistant is here to assist.

{history}
Human: {human_input}
Assistant:"""

    prompt = PromptTemplate(input_variables=["history", "human_input"], template=template)


    llm=HuggingFaceHub(repo_id="google/flan-t5-xxl", model_kwargs={"temperature":1, "max_length":512})


    chatgpt_chain = LLMChain(
    llm=llm,
    prompt=prompt,
    verbose=True,
    memory=ConversationBufferWindowMemory(k=2),
)

    output = chatgpt_chain.predict(
    human_input="I want you to act as customer support system."
)   
    output = chatgpt_chain.predict(
    human_input=con
)   
    return output

bot("hello how are you")
