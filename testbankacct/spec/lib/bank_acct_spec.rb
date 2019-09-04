require 'spec_helper'

RSpec.describe BankAccount do
    describe '.new' do
        it 'takes an acct number and deposit amt as arguments' do
            bank_account = BankAccount.new(239238, 23948)
            expect(bank_account).to be_a(BankAccount)
        end
    end



describe '#account_number' do
    it 'returns the account number' do
        bank_account = BankAccount.new(239238, 23948)
    expect(bank_account.account_number).to eq(239238)
    end
end

describe "#initial_deposit" do
    it 'returns the initial deposit' do
    bank_account = BankAccount.new(239238, 23948)
    expect(bank_account.initial_deposit).to eq(23948)
    end
end

describe"#add_transaction" do
    it "stores the transaction in an array" do
        bank_account = BankAccount.new(239238, 23948)
        bank_account.add_transaction(-5.49)
        expect(bank_account.transactions).to include(-5.49)

    end
end
