<?php

namespace App\Http\Controllers;

class DashboardController extends Controller
{
    public function DashboardView() {
        return view('dashboard');
    }
    public function HalalFoodView() {
        return view('sectors.halal-food');
    }
    public function PharmaView() {
        return view('sectors.pharma');
    }
    public function CosmeticsView() {
        return view('sectors.cosmetics');
    }
    public function FashionView() {
        return view('sectors.fashion');
    }
    public function MediaView() {
        return view('sectors.media');
    }
    public function TravelView() {
        return view('sectors.travel');
    }
    public function FinanceView() {
            return view('sectors.finance');
    }
}
