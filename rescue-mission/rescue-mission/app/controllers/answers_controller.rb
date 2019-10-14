class AnswersController < ApplicationController

    def new
        @answer = Answer.new
        @question = Question.find(params[:question_id])
    end

    def create
        @question = Question.find(params[:question_id])
        @answer = Answer.new(answer_params)

        @answer.question = @question

        if @answer.save
            flash[:notice]= "answer saved"
            redirect_to @question
        else
            @form_error = @answer.errors.full_messages
            render :new
        end
    end

    private

    def answer_params
        params.require(:answer).permit(:description)
    end
end
