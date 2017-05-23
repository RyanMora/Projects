class Api::BenchesController < ApplicationController

  def index
    benches = Bench.all
  end

  def show
    @bench = Bench.find(params[:id])
  end

  def create
    @bench = Bench.create!(bench_params)
    render :show
  end

  private

  def bench_params
    params.require(:bench).permit(:lat, :long, :description, :picture_url)
  end
end
