require 'spec_helper'
RSpec.describe BankAccount do
let (:bank_account){bank_account = BankAccount.new(239238, 23948.00)}

    describe '.new' do
        it 'takes an acct number and deposit amt as arguments' do
            expect(bank_account).to be_a(BankAccount)
        end
    end

describe '#account_number' do
    it 'returns the account number' do
    expect(bank_account.account_number).to eq(239238)
    end
end

describe "#initial_deposit" do
    it 'returns the initial deposit' do
    expect(bank_account.initial_deposit).to eq(23948)
    end
end

describe"#add_transaction" do
    it "stores the transaction in an array" do
        bank_account.add_transaction(-5.49)
        expect(bank_account.transactions).to include(-5.49)
    end
end

describe "#current_balance" do
    it 'calculates the current balance' do
        bank_account.add_transaction(-10)
        bank_account.add_transaction(-5)
        bank_account.add_transaction(-5)
        expect(bank_account.current_balance).to eq(23928)
        end
    end


describe "summary" do
    it 'returns a text summary of the account' do
        bank_account.add_transaction(-10)
        bank_account.add_transaction(-5)
        bank_account.add_transaction(-5)

        summary = bank_account.summary
        expect(summary).to include("Account Number:239238")
        expect(summary).to include("initial deposit:$23948.00")
        expect(summary).to include("$-5.00")
        end
    end
end
